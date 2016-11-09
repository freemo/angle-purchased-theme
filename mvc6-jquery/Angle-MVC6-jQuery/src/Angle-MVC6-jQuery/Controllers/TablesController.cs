using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class TablesController : Controller
    {
        public IActionResult TableJQGrid()
        {
            return View();
        }
        public IActionResult TableDatatable()
        {
            return View();
        }
        public IActionResult TableExtended()
        {
            return View();
        }
        public IActionResult TableStandard()
        {
            return View();
        }

    }
}