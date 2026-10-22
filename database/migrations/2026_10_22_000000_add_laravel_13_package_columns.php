<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Columns required by the package versions used with Laravel 13:
 * - laravel/sanctum 3+ writes `personal_access_tokens.expires_at`.
 * - spatie/laravel-activitylog 4+ writes `activity_log.event` and `batch_uuid`.
 */
return new class extends Migration
{
    public function up()
    {
        if (Schema::hasTable('personal_access_tokens') && !Schema::hasColumn('personal_access_tokens', 'expires_at')) {
            Schema::table('personal_access_tokens', function (Blueprint $table) {
                $table->timestamp('expires_at')->nullable()->after('last_used_at');
            });
        }

        if (Schema::hasTable('activity_log')) {
            Schema::table('activity_log', function (Blueprint $table) {
                if (!Schema::hasColumn('activity_log', 'event')) {
                    $table->string('event')->nullable()->after('subject_type');
                }

                if (!Schema::hasColumn('activity_log', 'batch_uuid')) {
                    $table->uuid('batch_uuid')->nullable()->after('properties');
                }
            });
        }
    }

    public function down()
    {
        if (Schema::hasColumn('personal_access_tokens', 'expires_at')) {
            Schema::table('personal_access_tokens', function (Blueprint $table) {
                $table->dropColumn('expires_at');
            });
        }

        Schema::table('activity_log', function (Blueprint $table) {
            $table->dropColumn(['event', 'batch_uuid']);
        });
    }
};
