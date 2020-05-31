port module Blog exposing (main)

-- import Svg exposing (Svg, svg)
-- import Svg.Attributes as S exposing (..)

import Browser
import Date exposing (fromIsoString)
import Debug exposing (log)
import Html exposing (Html, div, h1, h2, h3, h6, hr, p, section, span, text)
import Html.Attributes exposing (class, style)
import Html.Events exposing (onClick)
import Http
import Json.Decode as Decode exposing (Decoder, int, string)
import Json.Decode.Pipeline exposing (optional, required)
import Post exposing (Post)
import Spinner
import Time exposing (Month(..), Weekday(..))


port forwardBlogIdToReact : String -> Cmd msg



-- MODEL


type alias Model =
    { state : State
    , posts : List Post
    , spinner : Spinner.Model
    }


type State
    = Failure
    | Loading
    | Success (List Post)


init : () -> ( Model, Cmd Msg )
init _ =
    ( { state = Loading, posts = [], spinner = Spinner.init }
    , getAllPosts
    )



-- UPDATE


type Msg
    = GotPosts (Result Http.Error (List Post))
    | ForwardId String
    | SpinnerMsg Spinner.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotPosts (Ok postsList) ->
            ( { model | state = Success postsList }, Cmd.none )

        GotPosts (Err _) ->
            ( { model | state = Failure }, Cmd.none )

        ForwardId idStr ->
            ( model, forwardId idStr )

        SpinnerMsg spinnerMsg ->
            let
                spinnerModel =
                    Spinner.update spinnerMsg model.spinner
            in
            ( { model | spinner = spinnerModel }
            , Cmd.none
            )



-- VIEW


view : Model -> Html Msg
view model =
    case model.state of
        Loading ->
            viewLoading model

        Failure ->
            viewFailure

        Success postsList ->
            viewSuccess postsList


viewLoading : Model -> Html msg
viewLoading model =
    div []
        [ text "Please wait while Heroku server spins up..."
        , Spinner.view Spinner.defaultConfig model.spinner
        ]


viewFailure : Html msg
viewFailure =
    text "Sorry, looks like there was an error!"


viewSuccess : List Post -> Html Msg
viewSuccess postsList =
    section []
        (List.map viewOnePost postsList)


getDate : String -> String
getDate date =
    case fromIsoString date of
        Ok datetime ->
            Date.format "EEEE, d MMMM y" datetime

        Err _ ->
            "not a valid date"


viewTags : String -> Html msg
viewTags tags =
    let
        tagList =
            String.split "," tags
    in
    div [ style "display" "flex" ] (List.map viewOneTag tagList)


viewOneTag : String -> Html msg
viewOneTag tag =
    h3 []
        [ span [ class "badge badge-info", style "margin-right" "8px" ] [ text tag ]
        ]


forwardId : String -> Cmd msg
forwardId id =
    forwardBlogIdToReact (log "id to react" id)


viewOnePost : Post -> Html Msg
viewOnePost post =
    div [ class "blog-post-summary", onClick (ForwardId (String.fromInt post.id)) ]
        [ div [ class "container" ]
            [ h2 [] [ text post.title ]
            , h6 [ class "blog-post--category" ] [ viewTags post.tags ]
            , h6 [ class "blog-post--date text-righ" ] [ text ("Date: " ++ getDate post.createdAt) ]
            ]
        , div [ class "container" ]
            [ hr [] []
            , div []
                [ p [ class "blog-post--excerpt" ] [ text post.subtitle ]
                , p [ class "text-mute text-right" ] [ text "Read more... |>" ]

                -- , span [] [ arrowRightCircle ]
                ]
            ]
        ]



-- HTTP


getAllPosts : Cmd Msg
getAllPosts =
    let
        url =
            "https://portfolio-blog-api-971.herokuapp.com/posts"
    in
    Http.get
        { url = url
        , expect = Http.expectJson GotPosts allPostsDecoder
        }


postDecoder : Decoder Post
postDecoder =
    Decode.succeed Post
        |> required "title" string
        |> required "id" int
        |> optional "subtitle" string ""
        |> required "slug" string
        |> required "tags" string
        |> required "created_at" string
        |> optional "updated_at" string ""
        |> required "content" string


allPostsDecoder : Decoder (List Post)
allPostsDecoder =
    Decode.list postDecoder



--
-- MAIN


main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \model -> Sub.map SpinnerMsg Spinner.subscription
        }



-- ICONS
-- svgFeatherIcon : String -> List (Svg msg) -> Html msg
-- svgFeatherIcon className =
--     svg
--         [ S.class <| "feather feather-" ++ className
--         , fill "none"
--         , height "24"
--         , stroke "currentColor"
--         , strokeLinecap "round"
--         , strokeLinejoin "round"
--         , strokeWidth "2"
--         , viewBox "0 0 24 24"
--         , width "24"
--         ]
-- arrowRightCircle : Html msg
-- arrowRightCircle =
--     svgFeatherIcon "arrow-right-circle"
--         [ Svg.circle [ cx "12", cy "12", r "10" ] []
--         , Svg.polyline [ points "12 16 16 12 12 8" ] []
--         , Svg.line [ x1 "8", y1 "12", x2 "16", y2 "12" ] []
--         ]
