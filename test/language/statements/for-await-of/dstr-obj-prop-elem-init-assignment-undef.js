// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-prop-elem-init-assignment-undef.case
// - src/dstr-assignment/default/for-await-of.template
/*---
description: If the Initializer is present and v is undefined, the Initializer should be evaluated and the result assigned to the target reference (undefined value) (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, async]
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var x;

var counter = 0;

async function fn() {
  for await ({ y: x = 1 } of [{ y: undefined }]) {
    assert.sameValue(x, 1);
    counter += 1;
  }
}

fn()
  .then(() => assert.sameValue(counter, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);