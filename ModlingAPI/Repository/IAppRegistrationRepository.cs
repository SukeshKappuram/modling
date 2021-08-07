using ModlingAPI.Models;
using System.Threading.Tasks;

namespace ModlingAPI.Repository
{
    public interface IAppRegistrationRepository
    {
        public Task<bool> AddCreator(Creator creator);
        public Task<bool> AddBrand(Brand brand);
    }
}
