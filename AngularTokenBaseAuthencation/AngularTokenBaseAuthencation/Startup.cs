using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

using Microsoft.Owin.Security.OAuth;
using System.Web.Http;
using Microsoft.Owin.Cors;

[assembly: OwinStartupAttribute(typeof(AngularTokenBaseAuthencation.Startup))]
namespace AngularTokenBaseAuthencation
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
            //enabal cross origin resource sharing
            app.UseCors(CorsOptions.AllowAll);

            OAuthAuthorizationServerOptions option = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/token"),
                Provider = new ApplicationOAuthProvider(),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),
                AllowInsecureHttp = true
            };
            app.UseOAuthAuthorizationServer(option);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

            ConfigureAuth(app);
        }




    }
}
