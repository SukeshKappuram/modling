using ModlingAPI.Models;
using ModlingAPI.Repository;
using System.Threading.Tasks;

namespace ModlingAPI.Business
{
    public class AppRegistrationsBusiness : IAppRegistrationsBusiness
    {
        private readonly IAppRegistrationRepository _appRegistrationRepository;
        public AppRegistrationsBusiness(IAppRegistrationRepository appRegistrationRepository)
        {
            _appRegistrationRepository = appRegistrationRepository;
        }
        public Task<bool> AddBrand(Brand brand)
        {
            return _appRegistrationRepository.AddBrand(brand);
        }

        public Task<bool> AddCreator(Creator creator)
        {
            return _appRegistrationRepository.AddBrand(creator);
        }
    }
}
