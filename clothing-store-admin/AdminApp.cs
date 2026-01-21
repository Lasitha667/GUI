using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace ClothingStoreAdmin
{
    // Data Model
    public class Product
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("price")]
        public string Price { get; set; }

        [JsonPropertyName("image")]
        public string Image { get; set; }

        [JsonPropertyName("category")]
        public string Category { get; set; }
    }

    public class MainWindow : Window
    {
        private ListBox productList;
        private TextBox nameBox;
        private TextBox priceBox;
        private TextBox imageBox;
        private ComboBox categoryBox;
        private string jsonPath = "../../../../clothing-store/public/products.json";
        
        private List<Product> products = new List<Product>();
        private Product selectedProduct = null;

        public MainWindow()
        {
            Title = "Thread & Co. Admin - Manage Products";
            Width = 900;
            Height = 600;
            WindowStartupLocation = WindowStartupLocation.CenterScreen;
            Background = new SolidColorBrush(Color.FromRgb(248, 250, 252));

            var mainGrid = new Grid();
            mainGrid.Margin = new Thickness(20);
            mainGrid.ColumnDefinitions.Add(new ColumnDefinition { Width = new GridLength(1, GridUnitType.Star) }); // List
            mainGrid.ColumnDefinitions.Add(new ColumnDefinition { Width = new GridLength(20) }); // Spacer
            mainGrid.ColumnDefinitions.Add(new ColumnDefinition { Width = new GridLength(2, GridUnitType.Star) }); // Form

            // --- Left Column: Product List ---
            var listHeader = new TextBlock
            {
                Text = "Products",
                FontSize = 20,
                FontWeight = FontWeights.Bold,
                Margin = new Thickness(0, 0, 0, 10)
            };
            Grid.SetColumn(listHeader, 0);
            
            var listDock = new DockPanel();
            listDock.Children.Add(listHeader);
            DockPanel.SetDock(listHeader, Dock.Top);

            var addNewBtn = new Button
            {
                Content = "+ Add New Product",
                Height = 35,
                Margin = new Thickness(0, 10, 0, 0),
                Background = new SolidColorBrush(Color.FromRgb(15, 23, 42)),
                Foreground = Brushes.White
            };
            addNewBtn.Click += (s, e) => ClearForm();
            listDock.Children.Add(addNewBtn);
            DockPanel.SetDock(addNewBtn, Dock.Bottom);

            productList = new ListBox { Margin = new Thickness(0) };
            productList.SelectionChanged += ProductList_SelectionChanged;
            listDock.Children.Add(productList);
            
            Grid.SetColumn(listDock, 0);
            mainGrid.Children.Add(listDock);

            // --- Right Column: Edit Form ---
            var formGrid = new Grid();
            Grid.SetColumn(formGrid, 2);
            formGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Header
            formGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Name
            formGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Price
            formGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Image
            formGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Category
            formGrid.RowDefinitions.Add(new RowDefinition { Height = new GridLength(1, GridUnitType.Star) }); // Spacer
            formGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Buttons

            var formHeader = new TextBlock
            {
                Text = "Product Details",
                FontSize = 20,
                FontWeight = FontWeights.Bold,
                Margin = new Thickness(0, 0, 0, 20)
            };
            formGrid.Children.Add(formHeader);

            // Name
            formGrid.Children.Add(CreateLabel("Product Name:", 1));
            nameBox = CreateTextBox(1);
            formGrid.Children.Add(nameBox);

            // Price
            formGrid.Children.Add(CreateLabel("Price (e.g., $29.00):", 2));
            priceBox = CreateTextBox(2);
            formGrid.Children.Add(priceBox);

            // Image
            formGrid.Children.Add(CreateLabel("Image:", 3));
            var imagePanel = new DockPanel { Margin = new Thickness(0, 30, 0, 10) };
            var browseBtn = new Button
            {
                Content = "Browse...",
                Padding = new Thickness(10, 5, 10, 5),
                Margin = new Thickness(10, 0, 0, 0)
            };
            browseBtn.Click += BrowseButton_Click;
            DockPanel.SetDock(browseBtn, Dock.Right);
            imagePanel.Children.Add(browseBtn);
            imageBox = new TextBox
            {
                Height = 35,
                FontSize = 14,
                Padding = new Thickness(5),
                VerticalContentAlignment = VerticalAlignment.Center,
                IsReadOnly = true
            };
            imagePanel.Children.Add(imageBox);
            Grid.SetRow(imagePanel, 3);
            formGrid.Children.Add(imagePanel);

            // Category
            formGrid.Children.Add(CreateLabel("Category:", 4));
            categoryBox = new ComboBox
            {
                Height = 35,
                Margin = new Thickness(0, 30, 0, 10),
                FontSize = 14,
                VerticalContentAlignment = VerticalAlignment.Center
            };
            categoryBox.Items.Add("Men");
            categoryBox.Items.Add("Women");
            categoryBox.SelectedIndex = 0;
            Grid.SetRow(categoryBox, 4);
            formGrid.Children.Add(categoryBox);

            // Action Buttons
            var btnPanel = new StackPanel { Orientation = Orientation.Horizontal, HorizontalAlignment = HorizontalAlignment.Right, Margin = new Thickness(0, 20, 0, 0) };
            
            var deleteBtn = new Button
            {
                Content = "Delete",
                Width = 100,
                Height = 40,
                Margin = new Thickness(0, 0, 10, 0),
                Background = Brushes.Red,
                Foreground = Brushes.White,
                FontWeight = FontWeights.Bold
            };
            deleteBtn.Click += DeleteButton_Click;
            btnPanel.Children.Add(deleteBtn);

            var saveBtn = new Button
            {
                Content = "Save Product",
                Width = 120,
                Height = 40,
                Background = new SolidColorBrush(Color.FromRgb(15, 23, 42)),
                Foreground = Brushes.White,
                FontWeight = FontWeights.Bold
            };
            saveBtn.Click += SaveButton_Click;
            btnPanel.Children.Add(saveBtn);

            Grid.SetRow(btnPanel, 6);
            formGrid.Children.Add(btnPanel);

            mainGrid.Children.Add(formGrid);
            Content = mainGrid;

            LoadProducts();
        }

        private void LoadProducts()
        {
            try
            {
                string fullPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, jsonPath));
                if (File.Exists(fullPath))
                {
                    string json = File.ReadAllText(fullPath);
                    products = JsonSerializer.Deserialize<List<Product>>(json) ?? new List<Product>();
                }
                RefreshList();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error loading products: " + ex.Message);
            }
        }

        private void RefreshList()
        {
            productList.Items.Clear();
            foreach (var p in products)
            {
                productList.Items.Add($"{p.Id}: {p.Name} ({p.Price})");
            }
        }

        private void ProductList_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (productList.SelectedIndex >= 0 && productList.SelectedIndex < products.Count)
            {
                selectedProduct = products[productList.SelectedIndex];
                nameBox.Text = selectedProduct.Name;
                priceBox.Text = selectedProduct.Price;
                imageBox.Text = selectedProduct.Image;
                categoryBox.SelectedItem = selectedProduct.Category;
            }
        }

        private void ClearForm()
        {
            selectedProduct = null;
            productList.SelectedIndex = -1;
            nameBox.Text = "";
            priceBox.Text = "";
            imageBox.Text = "";
            categoryBox.SelectedIndex = 0;
        }

        private void SaveButton_Click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(nameBox.Text) || string.IsNullOrWhiteSpace(priceBox.Text))
            {
                MessageBox.Show("Please fill in required fields.");
                return;
            }

            // Image Upload Logic (Only if path changed and is local file)
            string savedImagePath = imageBox.Text;
            if (File.Exists(imageBox.Text)) // If logic checks if it's a local file path
            {
                 try {
                    string assetsPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "../../../../clothing-store/public/assets"));
                    if (!Directory.Exists(assetsPath)) Directory.CreateDirectory(assetsPath);

                    string fileExtension = Path.GetExtension(imageBox.Text);
                    string newFileName = Guid.NewGuid().ToString() + fileExtension;
                    string destPath = Path.Combine(assetsPath, newFileName);

                    File.Copy(imageBox.Text, destPath, true);
                    savedImagePath = "/assets/" + newFileName;
                 }
                 catch(Exception ex) {
                     MessageBox.Show("Error copying image: " + ex.Message);
                     return;
                 }
            }

            if (selectedProduct == null)
            {
                // Create New
                int newId = products.Any() ? products.Max(p => p.Id) + 1 : 1;
                var newProduct = new Product
                {
                    Id = newId,
                    Name = nameBox.Text,
                    Price = priceBox.Text,
                    Image = savedImagePath,
                    Category = categoryBox.SelectedItem?.ToString() ?? "Men"
                };
                products.Add(newProduct);
            }
            else
            {
                // Update Existing
                selectedProduct.Name = nameBox.Text;
                selectedProduct.Price = priceBox.Text;
                selectedProduct.Image = savedImagePath;
                selectedProduct.Category = categoryBox.SelectedItem?.ToString() ?? "Men";
            }

            SaveToJson();
            RefreshList();
            ClearForm();
            MessageBox.Show("Saved successfully!");
        }

        private void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            if (selectedProduct != null)
            {
                products.Remove(selectedProduct);
                SaveToJson();
                RefreshList();
                ClearForm();
                MessageBox.Show("Product deleted.");
            }
        }

        private void SaveToJson()
        {
            try
            {
                string fullPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, jsonPath));
                string json = JsonSerializer.Serialize(products, new JsonSerializerOptions { WriteIndented = true });
                File.WriteAllText(fullPath, json);
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error saving database: " + ex.Message);
            }
        }

        private TextBlock CreateLabel(string text, int row)
        {
            var label = new TextBlock
            {
                Text = text,
                FontWeight = FontWeights.SemiBold,
                Margin = new Thickness(0, 5, 0, 0)
            };
            Grid.SetRow(label, row);
            return label;
        }

        private TextBox CreateTextBox(int row)
        {
            var box = new TextBox
            {
                Height = 35,
                Margin = new Thickness(0, 30, 0, 10),
                FontSize = 14,
                Padding = new Thickness(5),
                VerticalContentAlignment = VerticalAlignment.Center
            };
            Grid.SetRow(box, row);
            return box;
        }

        private void BrowseButton_Click(object sender, RoutedEventArgs e)
        {
            Microsoft.Win32.OpenFileDialog openFileDialog = new Microsoft.Win32.OpenFileDialog();
            openFileDialog.Filter = "Image files (*.png;*.jpeg;*.jpg)|*.png;*.jpeg;*.jpg|All files (*.*)|*.*";
            if (openFileDialog.ShowDialog() == true)
            {
                imageBox.Text = openFileDialog.FileName;
            }
        }
    }

    public class Program
    {
        [STAThread]
        public static void Main()
        {
            var app = new Application();
            app.Run(new MainWindow());
        }
    }
}
