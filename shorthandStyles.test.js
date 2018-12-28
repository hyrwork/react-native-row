import getStyles from "./shorthandStyles";

test("margin", () => {
  expect(getStyles(20)).toEqual({
    margin: 20
  });
});

test("margin padding", () => {
  expect(getStyles(20, 20)).toEqual({
    margin: 20,
    padding: 20
  });
});

test("vertical", () => {
  expect(getStyles([20])).toEqual({
    marginVertical: 20
  });
});

test("vertical horizontal", () => {
  expect(getStyles([20, 15])).toEqual({
    marginVertical: 20,
    marginHorizontal: 15
  });
});

test("top horizontal bottom", () => {
  expect(getStyles([20, 15, 10])).toEqual({
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 10
  });
});

test("top right bottom left", () => {
  expect(getStyles([20, 15, 10, 5])).toEqual({
    marginTop: 20,
    marginRight: 15,
    marginBottom: 10,
    marginLeft: 5
  });
});
