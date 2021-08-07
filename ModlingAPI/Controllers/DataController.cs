using Microsoft.AspNetCore.Mvc;
using ModlingAPI.Business;
using ModlingAPI.Models;
using System.Threading.Tasks;

namespace ModlingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly IAppRegistrationsBusiness _appRegistrationsBusiness;
        public DataController(IAppRegistrationsBusiness appRegistrationsBusiness)
        {
            _appRegistrationsBusiness = appRegistrationsBusiness;
        }

        [ProducesResponseType(typeof(bool), 200)]
        [HttpPost("creator")]
        public Task<bool> AddCreator(Creator creator)
        {
            return _appRegistrationsBusiness.AddCreator(creator);
        }

        [ProducesResponseType(typeof(bool), 200)]
        [HttpPost("brand")]
        public Task<bool> AddBrand(Brand brand)
        {
            return _appRegistrationsBusiness.AddBrand(brand);
        }
    }
}
