using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angle_MVC6_jQuery_Seed.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
