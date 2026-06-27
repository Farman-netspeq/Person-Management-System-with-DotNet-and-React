using System.ComponentModel.DataAnnotations;

namespace DotNetReactCrud.Models
{
    public class Person
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(12)]
        public string FirstName { get; set; }=string.Empty;
        [Required]
        [MaxLength(12)]
        public string LastName { get; set; }=string.Empty;
    }
}
