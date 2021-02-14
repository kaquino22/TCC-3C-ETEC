using MervitApi.Data;
using MervitApi.Data.Interface;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace MervitApi.IoC
{
    public static class DependencyInjectionSetup
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            services.AddScoped<IUsuarioRepository, UsuarioRepository>();
           
        }
    }
}
