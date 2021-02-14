using MervitApi.Model;
using Microsoft.EntityFrameworkCore;

namespace MervitApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuario { get; set; }
   
    }
}
