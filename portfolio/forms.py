from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(required=True)
    from_email = forms.EmailField(required=True)
    message = forms.CharField(
        widget=forms.Textarea(
            attrs={'rows': 5, 'placeholder': 'Looking for a junior developer? Need a cool website? Let\'s get in touch!'}
        ),
        max_length=4000,
        help_text='The max length of the text is 4000.'
        )
