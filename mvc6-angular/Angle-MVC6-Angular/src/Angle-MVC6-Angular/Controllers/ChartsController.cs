using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class ChartsController : Controller
    {
        // GET: Charts
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult ChartChartist()
        {
            return View();
        }
        public IActionResult ChartFlot()
        {
            return View();
        }
        public IActionResult ChartJs()
        {
            return View();
        }
        public IActionResult ChartMorris()
        {
            return View();
        }
        public IActionResult ChartRadial()
        {
            return View();
        }
        public IActionResult ChartRickshaw()
        {
            return View();
        }
    }
}