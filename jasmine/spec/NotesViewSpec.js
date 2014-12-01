describe("View", function() {
  beforeEach(function() {
    view = new PinPoint.View();
    controller = new Pinpoint.NoteController();
  })

  it("should be defined", function() {
    expect(view).toBeDefined();
  })

  describe("View#redraw", function() {
    it("should call populateDOMNoteList with one argument", function(){
      spyOn(view, "populateDOMNoteList");
      view.redraw(controller);
      expect(view.populateDOMNoteList).toHaveBeenCalledWith(1);
    })
  })

})