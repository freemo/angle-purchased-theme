using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class TablesController : Controller
    {
        // GET: Tables
        public IActionResult TableAngulargrid()
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
        public IActionResult TableNgGrid()
        {
            return View();
        }
        public IActionResult TableNgtable()
        {
            return View();
        }
        public IActionResult TableStandard()
        {
            return View();
        }
        public IActionResult TableUigrid()
        {
            return View();
        }
        public IActionResult TableXeditable()
        {
            return View();
        }
    }
}