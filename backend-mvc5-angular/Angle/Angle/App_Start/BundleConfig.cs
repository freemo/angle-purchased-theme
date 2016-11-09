using System.Web;
using System.Web.Optimization;

namespace Angle
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Application Scripts
            bundles.Add(new ScriptBundle("~/bundles/appScripts")
                // Main module definition
                .Include("~/Scripts/app/app.module.js")
                // All modules definition
                .Include("~/Scripts/app/modules/core/core.module.js")
                .IncludeDirectory("~/Scripts/app/modules/core", "*.js", true)
                .Include("~/Scripts/app/modules/colors/colors.module.js")
                .IncludeDirectory("~/Scripts/app/modules/colors", "*.js", true)
                .Include("~/Scripts/app/modules/lazyload/lazyload.module.js")
                .IncludeDirectory("~/Scripts/app/modules/lazyload", "*.js", true)
                .Include("~/Scripts/app/modules/loadingbar/loadingbar.module.js")
                .IncludeDirectory("~/Scripts/app/modules/loadingbar", "*.js", true)
                .Include("~/Scripts/app/modules/navsearch/navsearch.module.js")
                .IncludeDirectory("~/Scripts/app/modules/navsearch", "*.js", true)
                .Include("~/Scripts/app/modules/preloader/preloader.module.js")
                .IncludeDirectory("~/Scripts/app/modules/preloader", "*.js", true)
                .Include("~/Scripts/app/modules/routes/routes.module.js")
                .IncludeDirectory("~/Scripts/app/modules/routes", "*.js", true)
                .Include("~/Scripts/app/modules/settings/settings.module.js")
                .IncludeDirectory("~/Scripts/app/modules/settings", "*.js", true)
                .Include("~/Scripts/app/modules/sidebar/sidebar.module.js")
                .IncludeDirectory("~/Scripts/app/modules/sidebar", "*.js", true)
                .Include("~/Scripts/app/modules/translate/translate.module.js")
                .IncludeDirectory("~/Scripts/app/modules/translate", "*.js", true)
                .Include("~/Scripts/app/modules/utils/utils.module.js")
                .IncludeDirectory("~/Scripts/app/modules/utils", "*.js", true)
                .Include("~/Scripts/app/modules/dashboard/dashboard.module.js")
                .IncludeDirectory("~/Scripts/app/modules/dashboard", "*.js", true)
                .Include("~/Scripts/app/modules/charts/charts.module.js")
                .IncludeDirectory("~/Scripts/app/modules/charts", "*.js", true)
                .Include("~/Scripts/app/modules/elements/elements.module.js")
                .IncludeDirectory("~/Scripts/app/modules/elements", "*.js", true)
                .Include("~/Scripts/app/modules/bootstrapui/bootstrapui.module.js")
                .IncludeDirectory("~/Scripts/app/modules/bootstrapui", "*.js", true)
                .Include("~/Scripts/app/modules/extras/extras.module.js")
                .IncludeDirectory("~/Scripts/app/modules/extras", "*.js", true)
                .Include("~/Scripts/app/modules/flatdoc/flatdoc.module.js")
                .IncludeDirectory("~/Scripts/app/modules/flatdoc", "*.js", true)
                .Include("~/Scripts/app/modules/icons/icons.module.js")
                .IncludeDirectory("~/Scripts/app/modules/icons", "*.js", true)
                .Include("~/Scripts/app/modules/locale/locale.module.js")
                .IncludeDirectory("~/Scripts/app/modules/locale", "*.js", true)
                .Include("~/Scripts/app/modules/mailbox/mailbox.module.js")
                .IncludeDirectory("~/Scripts/app/modules/mailbox", "*.js", true)
                .Include("~/Scripts/app/modules/maps/maps.module.js")
                .IncludeDirectory("~/Scripts/app/modules/maps", "*.js", true)
                .Include("~/Scripts/app/modules/notify/notify.module.js")
                .IncludeDirectory("~/Scripts/app/modules/notify", "*.js", true)
                .Include("~/Scripts/app/modules/pages/pages.module.js")
                .IncludeDirectory("~/Scripts/app/modules/pages", "*.js", true)
                .Include("~/Scripts/app/modules/panels/panels.module.js")
                .IncludeDirectory("~/Scripts/app/modules/panels", "*.js", true)
                .Include("~/Scripts/app/modules/tables/tables.module.js")
                .IncludeDirectory("~/Scripts/app/modules/tables", "*.js", true)
                .Include("~/Scripts/app/modules/forms/forms.module.js")
                .IncludeDirectory("~/Scripts/app/modules/forms", "*.js", true)
                // Custom scripts
                .Include("~/Scripts/app/custom/custom.module.js")
                .IncludeDirectory("~/Scripts/app/custom", "*.js", true));
            
            // Base Scripts (not lazyloaded)
            bundles.Add(new ScriptBundle("~/bundles/baseScripts").Include(
              "~/Vendor/modernizr/modernizr.js",
              "~/Vendor/jquery/dist/jquery.js",
              "~/Vendor/angular/angular.js",
              "~/Vendor/angular-route/angular-route.js",
              "~/Vendor/angular-cookies/angular-cookies.js",
              "~/Vendor/angular-animate/angular-animate.js",
              "~/Vendor/angular-touch/angular-touch.js",
              "~/Vendor/angular-ui-router/release/angular-ui-router.js",
              "~/Vendor/ngstorage/ngStorage.js",
              "~/Vendor/angular-ui-utils/ui-utils.js",
              "~/Vendor/angular-ui-utils/index.js",
              "~/Vendor/angular-ui-mask/dist/mask.js",
              "~/Vendor/angular-ui-event/dist/event.js",
              "~/Vendor/angular-ui-validate/dist/validate.js",
              "~/Vendor/angular-ui-indeterminate/dist/indeterminate.js",
              "~/Vendor/angular-ui-scrollpoint/dist/scrollpoint.js",
              "~/Vendor/angular-ui-scroll/dist/ui-scroll.js",
              "~/Vendor/angular-ui-uploader/dist/uploader.js",
              "~/Vendor/angular-sanitize/angular-sanitize.js",
              "~/Vendor/angular-resource/angular-resource.js",
              "~/Vendor/angular-translate/angular-translate.js",
              "~/Vendor/angular-translate-loader-url/angular-translate-loader-url.js",
              "~/Vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js",
              "~/Vendor/angular-translate-storage-local/angular-translate-storage-local.js",
              "~/Vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.js",
              "~/Vendor/oclazyload/dist/ocLazyLoad.js",
              "~/Vendor/angular-bootstrap/ui-bootstrap-tpls.js",
              "~/Vendor/angular-loading-bar/build/loading-bar.js",
              "~/Vendor/angular-dynamic-locale/dist/tmhDynamicLocale.js",
              "~/Vendor/jquery.browser/dist/jquery.browser.js",
              "~/Vendor/matchMedia/matchMedia.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/appStyles")
                    .Include("~/Content/app/app.css")
                    .Include("~/Content/mvc-override.css"));
            
            bundles.Add(new StyleBundle("~/bundles/bootstrapStyles")
                    .Include("~/Content/app/bootstrap.css"));
        }
    }
}
