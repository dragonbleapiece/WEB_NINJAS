<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MissionRealisee extends Model
{

    protected $primaryKey = 'idmrealisee';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fin', 'difficulte', 'statut',
    ];

    protected $table = "missionrealisee";

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public $timestamps = false;

}
