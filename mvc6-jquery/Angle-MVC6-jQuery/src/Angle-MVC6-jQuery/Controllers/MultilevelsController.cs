using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class MultilevelsController : Controller
    {
        public IActionResult Multilevel_1()
        {
            return View();
        }
        public IActionResult Multilevel_3()
        {
            return View();
        }
    }
}