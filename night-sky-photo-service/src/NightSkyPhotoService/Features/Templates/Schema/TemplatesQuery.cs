using NightSkyPhotoService.Features.Templates.Models;
using NightSkyPhotoService.Features.Templates.Queries;
using Boilerplate.Features.Core.Queries;

namespace NightSkyPhotoService.Features.Templates.Schema
{
    public class TemplatesQuery
    {
        public Task<Template> Template(string templateId, [Service] IQueryDispatcher dispatcher) 
        {
            return dispatcher.DispatchAsync<Template>(
                new GetTemplate(templateId)
            );
        }

        public Task<GetTemplatesModel> Templates(int offset, int fetch, [Service] IQueryDispatcher dispatcher)
        {
            return dispatcher.DispatchAsync<GetTemplatesModel>(new GetTemplates(offset, fetch));
        }
    }
}
