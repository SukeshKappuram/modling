using ModlingAPI.Models;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using System.Data;

namespace ModlingAPI.Repository
{
    public class AppRegistrationRepository : IAppRegistrationRepository
    {
        private readonly string _connectionString;
        public AppRegistrationRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        private SqlConnection GetConnection()
        {
            return new SqlConnection(_connectionString);
        }

        public async Task<bool> AddBrand(Brand brand)
        {
            await using SqlConnection connection = GetConnection();
            return await connection.ExecuteScalarAsync<bool>("sp_AddBrand",
                new
                {
                    brand.FulllName,
                    brand.EmailAddress,
                    brand.PhoneNumber,
                    brand.WebsiteLink,
                    brand.Message
                }, null, null, commandType: CommandType.StoredProcedure).ConfigureAwait(false);
        }

        public async Task<bool> AddCreator(Creator creator)
        {
            await using SqlConnection connection = GetConnection();
            return await connection.ExecuteScalarAsync<bool>("sp_AddCreator",
                new
                {
                    creator.FulllName,
                    creator.EmailAddress,
                    creator.PhoneNumber,
                    creator.SocialMediaLink,
                    creator.Message
                }, null, null, commandType: CommandType.StoredProcedure).ConfigureAwait(false);
        }
    }
}
