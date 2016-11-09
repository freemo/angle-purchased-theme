using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angle.Startup))]
namespace Angle
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
