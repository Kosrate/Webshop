using Microsoft.OpenApi.Models;
using WebshopBackend.Models;

public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();

    // Example: Configure EF Core with SQL Server
    services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Webshop API", Version = "v1" });
    });
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // Swagger setup and other configurations...
}