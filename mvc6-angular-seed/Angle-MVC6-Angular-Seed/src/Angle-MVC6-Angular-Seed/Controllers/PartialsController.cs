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
        public IActionResult OffsidebarTab1()
        {
            return PartialView();
        }
        public IActionResult OffsidebarTab2()
        {
            return PartialView();
        }
    }
}