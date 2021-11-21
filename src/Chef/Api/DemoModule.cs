namespace Chef.Api
{
    public static class DemoModule
    {
        public static void MapDemoEndpoints(this IEndpointRouteBuilder endpoints)
        {
            endpoints.MapGet("/get-time", () => $"Time is {DateTime.Now}");


            endpoints.MapGet("/echo", (string text) => $"You said : {text}");
        }
    }
}
