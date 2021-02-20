using MervitApi.Data;
using MervitApi.Data.Interface;
using Microsoft.Extensions.DependencyInjection;
using System;
using MervitApi.Services;
using MervitApi.Services.Interface;

namespace MervitApi.DependencyInjectionSetup
{
    public static class DependencyInjectionSetup
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            services.AddScoped<IUsuarioRepository, UsuarioRepository>();

            services.AddTransient<IUsuarioServices, UsuarioServices>();
            services.AddTransient<IAccountService, AccountService>();
        }
    }
}
