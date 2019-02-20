﻿using System.ComponentModel.DataAnnotations;

namespace Fase.Web.Models.FormModels
{
    public class EmailForm
    {
        public string Subject { get; set; }

        [Required(ErrorMessage = "Du måste fylla i ditt namn.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Du måste fylla i din e-postadress.")]
        [EmailAddress(ErrorMessage = "E-postadressen är ogiltig.")]
        public string Email { get; set; }

        public string Phone { get; set; }
        public string Company { get; set; }
        public string Message { get; set; }
        public string ReturnUrl { get; set; }
    }
}