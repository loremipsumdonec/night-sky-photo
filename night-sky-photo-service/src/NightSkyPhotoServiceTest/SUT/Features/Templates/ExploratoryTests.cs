using NightSkyPhotoServiceTest.Services;
using Xunit;

namespace NightSkyPhotoServiceTest.SUT.Features.Templates
{
    [Collection("TemplateEngineForExploratoryTests"), Trait("type", "Exploratory")]
    public class ExploratoryTests
    {
        public ExploratoryTests(TemplateServiceEngineForExploratory engine)
        {
            Fixture = new TemplateServiceFixture(engine, "sv");
        }

        public TemplateServiceFixture Fixture { get; set; }

        [Fact]
        public void CreateAlotOfTemplates()
        {
            Fixture.CreateTemplates(40);
        }
    }
}
