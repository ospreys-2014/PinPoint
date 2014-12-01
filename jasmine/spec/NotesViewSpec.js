describe("View", function() {
  beforeEach(function() {
    view = new PinPoint.View();
    controller = new Pinpoint.NoteController();
  })

  it("should be defined", function() {
    expect(view).toBeDefined();
  })

})