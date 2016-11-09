using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class EcommerceController : Controller
    {
        public IActionResult EcommerceOrders()
        {
            return View();
        }
        public IActionResult EcommerceOrderView()
        {
            return View();
        }
        public IActionResult EcommerceProducts()
        {
            return View();
        }
        public IActionResult EcommerceProductView()
        {
            return View();
        }
        public ActionResult EcommerceCheckout()
        {
            return View();
        }
    }
}