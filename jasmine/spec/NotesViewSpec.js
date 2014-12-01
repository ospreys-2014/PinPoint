describe("View", function() {
  beforeEach(function() {
    view = new PinPoint.View();
    dummyController = {
      notes:['placeholder for controller notes']
    };
  })

  it("should be defined", function() {
    expect(view).toBeDefined();
  })

  describe("View#redraw", function() {
    it("should call populateDOMNoteList with one argument", function(){
      spyOn(view, "populateDOMNoteList");
      view.redraw();
      expect(view.populateDOMNoteList).toHaveBeenCalled();
    })

    it("should have a controller as an argument", function(){
      spyOn(view, "populateDOMNoteList");
      view.redraw(dummyController);
      expect(view.populateDOMNoteList).toHaveBeenCalledWith(dummyController);
    })


  })

})