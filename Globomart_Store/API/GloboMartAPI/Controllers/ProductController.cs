using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GloboMart.BusinessLogic;
using System.Data.Entity;

namespace GloboMartAPI.Controllers
{
    public class ProductController : ApiController
    {
        // GET: api/Product
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            ProductCore productCore = new ProductCore();
            return productCore.GetProductsFacade(ProductAction.GetAllProducts).ToList<Product>();
        }

        // GET: api/Product/5
        [HttpGet]
        [Route("api/product/{id}")]
        public IEnumerable<Product> Get(string id)
        {
            ProductCore productCore = new ProductCore();
            return productCore.GetProductsFacade(ProductAction.GetProductsForProductTypeID, id);
        }

        // POST: api/Product
        // Add Product
        [HttpPost]
        public HttpStatusCode Post(Product product)
        {
            ProductCore productCore = new ProductCore();
            if (productCore.AddProduct(product) > 0) 
                return HttpStatusCode.OK;
            else
                return HttpStatusCode.InternalServerError;

        }

        // DELETE: api/Product/5
        [HttpDelete]
        [Route("api/product/{productId}")]
        public HttpStatusCode Delete(int productId)
        {
            ProductCore productCore = new ProductCore();
            Product product = new Product() { ProductID = productId };
            if (productCore.RemoveProduct(product) > 0)
                return HttpStatusCode.OK;
            else
                return HttpStatusCode.InternalServerError;

        }
    }
}
