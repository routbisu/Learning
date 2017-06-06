using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using GloboMart.BusinessLogic;

namespace GloboMartAPI.Tests
{
    [TestClass]
    public class BusinessLogicTest
    {
        [TestMethod]
        public void ProductCoreGet_Test()
        {
            var productCoreMock = new Mock<ProductCore>();
            productCoreMock.Setup(x => x.GetPrice(It.IsAny<int>())).Returns("1000");

            Assert.AreEqual("1000", productCoreMock.Object.GetPrice(It.IsAny<int>()));

        }
    }
}
