<?php

namespace Fusion\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Form extends Mailable
{
    use Queueable, SerializesModels;

    protected $response;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($response)
    {
        //
        $this->response = $response;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject = $this->response->form->name.': '.$this->response->identifiable_email_address;
        return $this->subject($subject)->markdown('forms.mail', ['response' => $this->response]);
    }
}
