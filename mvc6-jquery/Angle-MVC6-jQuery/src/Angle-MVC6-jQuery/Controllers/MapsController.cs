using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class MapsController : Controller
    {
        public IActionResult MapsGoogle()
        {
            return View();
        }
        public IActionResult MapsVector()
        {
            return View();
        }
    }
}