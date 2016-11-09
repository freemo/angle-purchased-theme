using System.Web;
using System.Web.Optimization;

namespace Angle
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // App Styles
            bundles.Add(new StyleBundle("~/Content/appCss").Include(
                "~/Content/app/css/app.css"
            ));

            // Bootstrap Styles
            bundles.Add(new StyleBundle("~/Content/bootstrapCss").Include(
                "~/Content/app/css/bootstrap.css", new CssRewriteUrlTransform()
            ));


            bundles.Add(new ScriptBundle("~/bundles/Angle").Include(
                // App init
                "~/Scripts/app/app.init.js",
                // Modules
                "~/Scripts/app/modules/bootstrap-start.js",
                "~/Scripts/app/modules/clear-storage.js",
                "~/Scripts/app/modules/constants.js",
                "~/Scripts/app/modules/localize.js",
                "~/Scripts/app/modules/navbar-search.js",
                "~/Scripts/app/modules/sidebar.js",
                "~/Scripts/app/modules/toggle-state.js",
                "~/Scripts/app/modules/utils.js"
            ));

            // Main Vendor

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-2.2.4.js"
            ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            // Vendor Plugins

            bundles.Add(new StyleBundle("~/bundles/simpleLineIcons").Include(
              "~/Vendor/simple-line-icons/css/simple-line-icons.css", new CssRewriteUrlTransform()
            ));


            bundles.Add(new ScriptBundle("~/bundles/storage").Include(
              "~/Vendor/jQuery-Storage-API/jquery.storageapi.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/whirl").Include(
              "~/Vendor/whirl/dist/whirl.css"
            ));

            bundles.Add(new StyleBundle("~/bundles/fontawesome").Include(
              "~/Vendor/fontawesome/css/font-awesome.min.css", new CssRewriteUrlTransform()
            ));

            bundles.Add(new StyleBundle("~/bundles/animatecss").Include(
              "~/Vendor/animate.css/animate.min.css"
            ));

            bundles.Add(new ScriptBundle("~/bundles/localize").Include(
              "~/Vendor/jquery-localize-i18n/dist/jquery.localize.js"
            ));

        }
    }
}
