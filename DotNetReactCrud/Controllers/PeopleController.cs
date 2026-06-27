using DotNetReactCrud.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetReactCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly AppDbContext _context;
        public PeopleController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> AddPerson(Person person)
        {
            try
            {
                _context.People.Add(person);
                await _context.SaveChangesAsync();
                return CreatedAtAction(
                nameof(GetPerson),
               new { id = person.Id },
                  person
   );

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }
        [HttpGet]
        public async Task<IActionResult> GetPeople()
        {
            try
            {
                var people = await _context.People.ToListAsync();
                return Ok(people);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetPerson(int id)
        {
            try
            {
                var person = await _context.People.FindAsync(id);
                if (person == null)
                {
                    return NotFound("Person  Not Found!!");
                }
                return Ok(person);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdatePerson(int id, [FromBody] Person person)
        {
            try
            {
                if (person.Id != id)
                {
                    return BadRequest("Id Mismatch");
                }
                if (!_context.People.Any(p => p.Id == id))
                {
                    return NotFound("Person Not Found!!");
                }
                _context.People.Update(person);
                await _context.SaveChangesAsync();
                return Ok(person);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeletePerson(int id)
        {
            try
            {
                var person = await _context.People.FindAsync(id);
                if (person == null)
                {
                    return NotFound("Person Not Found!!");
                }
                _context.People.Remove(person);
                await _context.SaveChangesAsync();
                return Ok("Person Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }
    }
}
