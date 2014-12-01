describe("NotePresenter", function(){
  beforeEach(function() {
    dummyNote = {
      noteTime: "0:30",
      noteContent: "I'm a dummy note"
    };
    notePresenter = new PinPoint.NotePresenter(dummyNote);
  });

  it("should be defined.", function(){
    expect(notePresenter).toBeDefined();
  });

});
