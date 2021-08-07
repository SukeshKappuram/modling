using ModlingAPI.Models;
using System.Threading.Tasks;

namespace ModlingAPI.Business
{
    public interface IAppRegistrationsBusiness
    {
        public Task<bool> AddCreator(Creator creator);
        public Task<bool> AddBrand(Brand brand);
    }
}
