// import modules
const assert = require("assert")

// import classes
const { Player, Teammate } = require("../main.js")

// declare and define variables

if (typeof describe === "function") {
  describe("Player", function () {
    it("Should create a player", function () {
      const player1 = new Player(1, "Dude Mcgee")
      assert.equal(player1.name, "Dude Mcgee")
      assert.equal(player1.id, 1)
    })
  })
  describe("Teammate", function () {
    it("Should create a blue teammate", function () {
      const teammate1 = new Teammate(1, "Dude Mcgee", "Blue", "Mascot")
      assert.equal(teammate1.name, "Dude Mcgee")
      assert.equal(teammate1.id, 1)
      assert.equal(teammate1.color, "Blue")
      assert.equal(teammate1.mascot, "Mascot")
    })
    it("Should create a red teammate", function () {
      const teammate1 = new Teammate(1, "Dude Mcgee", "Red", "Mascot")
      assert.equal(teammate1.name, "Dude Mcgee")
      assert.equal(teammate1.id, 1)
      assert.equal(teammate1.color, "Red")
      assert.equal(teammate1.mascot, "Mascot")
    })
  })
}
