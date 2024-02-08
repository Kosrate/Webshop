using Microsoft.EntityFrameworkCore;
using Webshop.Server.Models;
using WebshopBackend.Models;

namespace WebshopBackend.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}