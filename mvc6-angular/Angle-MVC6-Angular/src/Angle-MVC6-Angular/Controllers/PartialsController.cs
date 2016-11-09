using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class PartialsController : Controller
    {
        public IActionResult TopNavbar()
        {
            return PartialView();
        }
        public IActionResult TopNavbarH()
        {
            return PartialView();
        }
        public IActionResult Sidebar()
        {
            return PartialView();
        }
        public IActionResult Offsidebar()
        {
            return PartialView();
        }
        public IActionResult Footer()
        {
            return PartialView();
        }
        public IActionResult Settings()
        {
            return PartialView();
        }
        public IActionResult Chat()
        {
            return PartialView();
        }
    }
}