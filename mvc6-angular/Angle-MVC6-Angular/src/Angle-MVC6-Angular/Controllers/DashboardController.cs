using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public IActionResult DashboardV1()
        {
            return View();
        }
        public IActionResult DashboardV2()
        {
            return View();
        }
        public IActionResult DashboardV3()
        {
            return View();
        }
    }
}