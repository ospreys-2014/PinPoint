describe("View", function() {
  beforeEach(function() {
    view = new PinPoint.View();
    // controller = new PinPoint.NoteController(['placeholder']);
  })

  xit("should be defined", function() {
    expect(view).toBeDefined();
  })

  describe("View#redraw", function() {
    it("should call populateDOMNoteList with one argument", function(){
      spyOn(view, "populateDOMNoteList");
      view.redraw();
      expect(view.populateDOMNoteList).toHaveBeenCalled();
    })

    xit("should have a controller as an argument", function(){
      view.redraw(controller);
      expect(view.redraw.args[0]).toEqual(controller);
    })
  })

})