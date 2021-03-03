# embroider-styles

Reproduction of an issue with Embroider builds, `ember-cli-eyeglass`, and lazy-loaded engines.

## Steps to Reproduce

Run `ember build` and see the error about "`my-addon was not found in any of the following locations:"

## Expected Behavior

The builds completes successfully. Note that this _does_ work under classic ember build, which you can see by running:

```
CLASSIC=1 ember build
```

## Actual Behavior

The build fails with an `EyeglassCompiler` error:

```
$TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/addon.scss:1:10: `my-addon` was not found in any of the following locations:
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/_my-addon.scss
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon/_index.scss
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon.scss
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon/index.scss
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon.sass
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon.css
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/_my-addon.sass
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/_my-addon.css
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon/index.sass
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon/index.css
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon/_index.sass
  $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/my-addon/_index.css
    at $TMPDIR/broccoli-718663h3zwkENJ94B/out-06-funnel/addon.scss:1:9
        at EyeglassCompiler
```
