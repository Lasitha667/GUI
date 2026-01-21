using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace ClothingStoreAdmin
{
    public class MainWindow : Window
    {
        private TextBox nameBox;
        private TextBox priceBox;
        private TextBox imageBox;
        private ComboBox categoryBox;
        private string jsonPath = "../clothing-store/public/products.json";

        public MainWindow()
        {
            Title = "Thread & Co. Admin - Add Product";
            Width = 500;
            Height = 450;
            WindowStartupLocation = WindowStartupLocation.CenterScreen;
            Background = new SolidColorBrush(Color.FromRgb(248, 250, 252));

            var mainGrid = new Grid();
            mainGrid.Margin = new Thickness(20);
            mainGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Header
            mainGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Name
            mainGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Price
            mainGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Image
            mainGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Category
            mainGrid.RowDefinitions.Add(new RowDefinition { Height = new GridLength(1, GridUnitType.Star) }); // Spacer
            mainGrid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto }); // Button

            var header = new TextBlock { 
                Text = "Add New Product", 
                FontSize = 24, 
                FontWeight = FontWeights.Bold, 
                Foreground = new SolidColorBrush(Color.FromRgb(15, 23, 42)),
                Margin = new Thickness(0, 0, 0, 20)
            };
            Grid.SetRow(header, 0);
            mainGrid.Children.Add(header);

            mainGrid.Children.Add(CreateLabel("Product Name:", 1));
            nameBox = CreateTextBox(1);
            mainGrid.Children.Add(nameBox);

            mainGrid.Children.Add(CreateLabel("Price (e.g., $29.00):", 2));
            priceBox = CreateTextBox(2);
            mainGrid.Children.Add(priceBox);

            mainGrid.Children.Add(CreateLabel("Image URL:", 3));
            imageBox = CreateTextBox(3);
            mainGrid.Children.Add(imageBox);

            mainGrid.Children.Add(CreateLabel("Category:", 4));
            categoryBox = new ComboBox { 
                Height = 35, 
                Margin = new Thickness(0, 30, 0, 10),
                FontSize = 14,
                VerticalContentAlignment = VerticalAlignment.Center
            };
            categoryBox.Items.Add("Men");
            categoryBox.Items.Add("Women");
            categoryBox.SelectedIndex = 0;
            Grid.SetRow(categoryBox, 4);
            mainGrid.Children.Add(categoryBox);

            var saveBtn = new Button {
                Content = "Save Product",
                Height = 45,
                FontSize = 16,
                FontWeight = FontWeights.Bold,
                Background = new SolidColorBrush(Color.FromRgb(15, 23, 42)),
                Foreground = Brushes.White,
                Cursor = System.Windows.Input.Cursors.Hand
            };
            saveBtn.Click += SaveButton_Click;
            Grid.SetRow(saveBtn, 6);
            mainGrid.Children.Add(saveBtn);

            Content = mainGrid;
        }

        private TextBlock CreateLabel(string text, int row)
        {
            var label = new TextBlock { 
                Text = text, 
                FontWeight = FontWeights.SemiBold,
                Margin = new Thickness(0, 5, 0, 0)
            };
            Grid.SetRow(label, row);
            return label;
        }

        private TextBox CreateTextBox(int row)
        {
            var box = new TextBox { 
                Height = 35, 
                Margin = new Thickness(0, 30, 0, 10),
                FontSize = 14,
                Padding = new Thickness(5),
                VerticalContentAlignment = VerticalAlignment.Center
            };
            Grid.SetRow(box, row);
            return box;
        }

        private void SaveButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                string name = nameBox.Text.Replace("\"", "'"); // Basic escape
                string price = priceBox.Text.Replace("\"", "'");
                string image = imageBox.Text.Replace("\"", "'");
                string category = categoryBox.SelectedItem.ToString();

                if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(price))
                {
                    MessageBox.Show("Please fill in all fields.");
                    return;
                }

                string fullPath = Path.GetFullPath(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, jsonPath));

                if (!File.Exists(fullPath))
                {
                    MessageBox.Show("Could not find products.json at: " + fullPath);
                    return;
                }

                string jsonContent = File.ReadAllText(fullPath);
                
                // Find Max ID using Regex
                int newId = 1;
                var matches = Regex.Matches(jsonContent, "\"id\":\\s*(\\d+)");
                if (matches.Count > 0)
                {
                    int maxId = 0;
                    foreach (Match match in matches)
                    {
                        int id;
                        if (int.TryParse(match.Groups[1].Value, out id))
                        {
                            if (id > maxId) maxId = id;
                        }
                    }
                    newId = maxId + 1;
                }

                // Construct new JSON object manually
                // Construct new JSON object manually
                string newProductJson = "  {\n    \"id\": " + newId + ",\n    \"name\": \"" + name + "\",\n    \"price\": \"" + price + "\",\n    \"image\": \"" + image + "\",\n    \"category\": \"" + category + "\"\n  }";

                // Insert before closing bracket
                int lastBracketIndex = jsonContent.LastIndexOf(']');
                if (lastBracketIndex > 0)
                {
                    string newContent = jsonContent.Substring(0, lastBracketIndex);
                    // Add comma if not empty array (simplified check: if length > 5 roughly)
                    if (jsonContent.Trim().Length > 10) 
                    {
                        newContent += ",\n" + newProductJson + "\n]";
                    }
                    else
                    {
                        newContent += "\n" + newProductJson + "\n]";
                    }
                    
                    File.WriteAllText(fullPath, newContent);
                    
                    MessageBox.Show("Product added successfully!");
                    nameBox.Text = "";
                    priceBox.Text = "";
                    imageBox.Text = "";
                }
                else
                {
                     MessageBox.Show("Invalid JSON format in products.json");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error saving product: " + ex.Message);
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
