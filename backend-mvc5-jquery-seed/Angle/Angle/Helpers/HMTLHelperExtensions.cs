using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle
{
    public static class HTMLHelperExtensions
    {
        public static string isActive(this HtmlHelper html, string controller = null, string action = null)
        {
            string activeClass = "active"; // change here if you another name to activate sidebar items
            // detect current app state
            string actualAction = (string) html.ViewContext.RouteData.Values["action"];
            string actualController = (string) html.ViewContext.RouteData.Values["controller"];

            if (String.IsNullOrEmpty(controller))
                controller = actualController;

            if (String.IsNullOrEmpty(action))
                action = actualAction;

            return (controller == actualController && action == actualAction) ? activeClass : String.Empty;
        }
    }
}
