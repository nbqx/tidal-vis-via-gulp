{-# LANGUAGE OverloadedStrings #-}

import Sound.Tidal.Context
import Sound.Tidal.Vis
import Data.Colour

-- available color
-- http://hackage.haskell.org/package/colour-2.3.3/docs/Data-Colour-Names.html

render :: Pattern ColourD -> IO()
render x = vSVG "./out/out.svg" (600,300) x

main = do render a
          return ()

a = "{red blue black, [orange green cyan]}"




