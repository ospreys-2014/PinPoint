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

  it("should contain a note when instantiated",function(){
    expect(notePresenter.note).toBeDefined;
    expect(notePresenter.note).not.toEqual(undefined);
    expect(notePresenter.note).not.toEqual(null);
  })

  it("should contain a rootNodeType of 'tr'",function() {
    expect(notePresenter.rootNodeType).toEqual('tr');
  })
  it("should contain a childNodeType of 'td'",function() {
    expect(notePresenter.childNodeType).toEqual('td');
  })

});