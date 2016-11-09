using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class FormsController : Controller
    {
        public IActionResult FormExtended()
        {
            return View();
        }

        public IActionResult FormStandard()
        {
            return View();
        }

        public IActionResult FormValidation()
        {
            return View();
        }

        public IActionResult FormUpload()
        {
            return View();
        }
        
        public IActionResult FormWizard()
        {
            return View();
        }

        public IActionResult FormXEditable()
        {
            return View();
        }

        // Used for xEditable demo to receive post confirmation
        [HttpPost]
        public IActionResult XEditableEdit()
        {
            return Content("");
        }

        public IActionResult FormImgCrop()
        {
            return View();
        }
    }
}