using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GloboMart.BusinessLogic
{
    public class ProductCore
    {
        static GloboMartDevEntities globalMartEntities = null;

        public ProductCore() 
        {
            // Create Instance of Global Mart Entities
            globalMartEntities = new GloboMartDevEntities();
        }

        public List<Product> GetProductsFacade(ProductAction productResultType, string productType = "")
        {
            switch (productResultType)
            {
                case ProductAction.GetAllProducts:
                    return GetAllProducts();

                case ProductAction.GetProductsForProductTypeID:
                    return GetProductsForProductTypeID(productType);
                
                default:
                    return null;
            }
        }

        private List<Product> GetAllProducts()
        {
            List<Product> allProducts = globalMartEntities.Products.ToList<Product>();
            return allProducts;
        }

        private List<Product> GetProductsForProductTypeID(string prodTypeID)
        {
            IEnumerable<Product> allProducts = globalMartEntities.Products
                .Where(prod => prod.ProductType.ProductType1.ToLower() == prodTypeID.ToLower());

            return allProducts.ToList<Product>();
        }
        
        public int AddProduct(Product product)
        {
            globalMartEntities.Products.Add(product);
            return globalMartEntities.SaveChanges();
        }

        public int RemoveProduct(Product product)
        {
            Product removeProd = globalMartEntities.Products.Where(p => p.ProductID == product.ProductID).SingleOrDefault();
            globalMartEntities.Products.Remove(removeProd);
            return globalMartEntities.SaveChanges();
        }

        public string GetPrice(int productID)
        {
            return globalMartEntities.Products.Where(prod => prod.ProductID == productID)
                                .SingleOrDefault().ProductUnitPrice.ToString();
        }
        
    }

    public enum ProductAction 
    {
        GetAllProducts,
        GetProductsForProductTypeID,
        AddProduct,
        RemoveProduct
    }
}
