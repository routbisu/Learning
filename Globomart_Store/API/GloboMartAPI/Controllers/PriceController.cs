using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GloboMart.BusinessLogic;

namespace GloboMartAPI.Controllers
{
    public class PriceController : ApiController
    {
        public string Get(int id)
        {
            ProductCore productCore = new ProductCore();
            return productCore.GetPrice(id);
        }
    }
}
